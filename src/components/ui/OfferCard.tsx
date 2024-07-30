interface IOffer {
    id: number;
    title: string;
    img: string;
}

export default function OfferCard({ offer }: { offer: IOffer }) {
    return <div>OfferCard</div>;
}
