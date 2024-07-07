import Link from 'next/link'

import styles from './Modal.module.scss';
import { FaTimes } from "react-icons/fa";

export function Modal({ children }: { children: React.ReactNode }) {
    // const router = useRouter();
    const onHandleClick = (e: React.SyntheticEvent) => {
        console.log()
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.closeButtonWrapper}>
                    <Link href={'/'}><FaTimes /></Link>
                </div>

                <div>{children}</div>
            </div>
        </div>
    )
}