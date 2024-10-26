import { ads } from '@/assets/listings.json'

export type Favourite = {
  adId: number
  createdAt: Date
}

export type Contact = {
  email: string
  parsedPhoneNumbers: string[]
}

export type Ad = {
  adId: number
  address: string
  price: number
  image: string
  currency: string
  uploadDate: string
  description: string
  status: string
  contact: Contact
  favourite: Favourite | null
}

export async function getAds(): Promise<Ad[]> {
  return mapAds(ads)
}

export async function getFavouriteAds(sort: string): Promise<Ad[]> {
  return mapAds(ads)
    .filter(
      (ad): ad is Omit<Ad, 'favourite'> & { favourite: Favourite } =>
        !!ad.favourite,
    )
    .sort((a, b) => {
      if (sort === 'date') {
        return (
          new Date(b.favourite?.createdAt).getTime() -
          new Date(a.favourite?.createdAt).getTime()
        )
      }
      if (sort === 'address') {
        return a.address.localeCompare(b.address)
      }
      return 0
    })
}

export async function getAdById(id: number): Promise<Ad | null> {
  const favourites = getFavourites()
  const ad = ads.find(ad => ad.adId === id) ?? null
  if (!ad) {
    return null
  }
  return mapAd(favourites)(ad)
}

export async function toggleFavourite(id: number): Promise<Ad> {
  const ad = ads.find(ad => ad.adId === id) ?? null
  if (!ad) {
    throw new Error('Not found')
  }
  const favourites = getFavourites()

  const hasFavourite = favourites.some(item => item.adId === ad.adId)
  const newFavourites = hasFavourite
    ? favourites.filter(item => item.adId !== ad.adId)
    : [...favourites, { adId: ad.adId, createdAt: new Date() }]

  setFavourites(newFavourites)
  return mapAd(newFavourites)(ad)
}

function mapAds(ads: Omit<Ad, 'favourite'>[]): Ad[] {
  const favourites = getFavourites()
  return ads.map(mapAd(favourites))
}

function mapAd(favourites: Favourite[]): (ad: Omit<Ad, 'favourite'>) => Ad {
  return ad => ({
    ...ad,
    favourite: favourites.find(item => item.adId === ad.adId) ?? null,
  })
}

const STORAGE_KEY = 'favourites'

function setFavourites(newFavourites: Favourite[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavourites))
}

function getFavourites(): Favourite[] {
  const favouritesString = localStorage.getItem(STORAGE_KEY)
  const favourites = !favouritesString ? [] : JSON.parse(favouritesString)
  return favourites
}
