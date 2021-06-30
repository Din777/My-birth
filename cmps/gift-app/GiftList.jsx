import { GiftPreview } from "./GiftPreview.jsx"
export function GiftList({ gifts }) {
    return (
        gifts.map(gift => {
            return < GiftPreview key={gift.id} gift={gift} />
        })
    )
}