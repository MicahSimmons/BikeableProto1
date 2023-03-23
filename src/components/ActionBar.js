

import Link from "next/link"
import styles from '@/styles/Home.module.css'

function Bar (params) {
    let bar_style = "nav justify-content-center  "
    if (params.fixed) {
        bar_style += "fixed-top "
        bar_style += styles.actionbar
    } else {
        bar_style += styles.spacer
    }
    return <>
        <nav class={bar_style}>
            <Link class="nav-link" href="#">Donate Now!</Link>
            <Link class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#emailModal" >Join Our Mailing List</Link>
        </nav>
    </>
}

export default function ActionBar () {
    return <>
        <Bar  />
        <Bar  fixed />
    </>
}
