

import Link from "next/link"
import styles from '@/styles/Home.module.css'


export default function ActionBar () {
    return <>
        <nav class={"nav justify-content-center fixed-top "+styles.actionbar}>
            <Link class="nav-link" href="#">Donate Now!</Link>
            <Link class="nav-link" href="#">Join Our Mailing List</Link>
        </nav>
    </>
}