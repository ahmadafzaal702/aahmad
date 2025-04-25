import { Mail, Phone, MapPin} from 'lucide-react';


const Contact = () => {
    return (
        <>
            <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:ahmadafzaal703@gmail.com">ahmadafzaal703@gmail.com</a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+971527483200">+971 52 7483200</a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Dubai, UAE</span>
                </li>
            </ul>
        </>
    )
}

export default Contact