import React from 'react'
import styles from './Marquee.module.scss'

export default function Marquee({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.marquee}>
                <div className={styles.track}>
                    <div>{children}</div>
                    <div>{children}</div>
                    <div>{children}</div>
                    <div>{children}</div>
                    <div>{children}</div>
                    <div>{children}</div>
                    <div>{children}</div>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}
