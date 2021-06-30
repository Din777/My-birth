export function GiftPreview({ gift }) {

    function getPicture() {
        console.log('gift.nickname', gift.nickname);
        console.log('gift.src', gift.src);
        if (gift.nickname === 'skalka') return "../assets/img/skalka.jpg"
        else if (gift.nickname === 'havaianas') return "../assets/img/havaianas.jpg"
        else if (gift.nickname === 'scrub') return "../assets/img/scrub.jpg"
        else return "./assets/img/spray.jpg"
    }

    return (
        <a href={gift.src}>
            <div className="gift-preview flex column align-center space-between">
                <img src={getPicture()} alt="" />
                <p className="gift-name">{gift.name}</p>
            </div>
        </a>
    )

}