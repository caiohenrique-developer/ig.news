import { useSession, signIn } from 'next-auth/client'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const [session] = useSession()
    
    function handleSubscribe() {
        if(!session) {
            signIn('github');
            return;
        }

        // fazer a criação do pagamento
    }
    
    return (
        <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
            Subscribe now
        </button>
    )
}