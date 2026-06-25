import React from 'react'
import Wishlist from '../../components/wishlist/Wishlist'
import JustForYou from '../../components/wishlist/JustForYou'

export default function WishlistPage() {
  return (
    <div className=" container mx-auto flex flex-col ">
            <div >
                <Wishlist />
            </div>
            <div className='mt-20'>
              <JustForYou/>
            </div>
    </div>
  )
}
