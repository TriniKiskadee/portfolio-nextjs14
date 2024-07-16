import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";

type HoverCardProps = {
    trigger: React.ReactNode | string
    title: string
    description: string
    image: string
    url: string
}

const HoverCardComponent = ({trigger, title, description, image, url}: HoverCardProps) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild className={'hover:scale-[120%]'}>
                {trigger}
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src={image}/>
                        <AvatarFallback>
                            {title}
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">
                            {title}
                        </h4>
                        <p className="text-sm">
                            {description}
                        </p>
                        <div className="flex items-center pt-2">
                            <Link
                                href={url}
                                className={'text-xs text-muted-foreground underline underline-offset-1'}
                                target="_blank"
                            >
                                {url}
                            </Link>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default HoverCardComponent