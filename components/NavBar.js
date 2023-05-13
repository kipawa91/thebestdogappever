import Link from "next/link";

export default function NavBar({ breed }) {

    const style = {
        "ul_breadcrumb_li_li_before": {
            "padding": "8px",
            "color": "black",
            "content": "\"/\\00a0\""
        }
    };

    return (
        <nav style={style} aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link href='/'>Breeds</Link></li>
                <li className="breadcrumb-item active text-capitalize" aria-current="page">{breed}</li>
            </ol>
        </nav>
    );
}
