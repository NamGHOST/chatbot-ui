import { FC } from "react"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card"
import { FeatureIcon } from "./feaureIcon"

interface SubscriptionCardProps {
  title: string
  price: number
  features: string[]
  buttonText: string
  onClick?: () => Promise<void>
}

export const SubscriptionCard: FC<SubscriptionCardProps> = ({
  features,
  price,
  title,
  buttonText,
  onClick
}) => {
  return (
    <Card className="m-6 flex flex-col justify-between p-6">
      <div>
        <CardHeader>
          <CardTitle>
            <div className="flex h-[60px] justify-between">
              <div className="text-4xl font-extrabold tracking-wide">
                {title}
              </div>
              <div>
                <span className="text-4xl font-extrabold">${price}</span>/ mo
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-2 grow space-y-1.5 font-light">
            <div className="space-y-1 font-semibold">
              {features.map((item, index) => {
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <FeatureIcon />
                    <div>{item}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </div>
      <CardFooter className="">
        <Button className="h-11 w-full text-xl font-bold" onClick={onClick}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
