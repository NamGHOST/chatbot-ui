/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable tailwindcss/enforces-shorthand */
"use client"
import React from "react"
import axios from "axios"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { checkSubscription } from "@/lib/subscription"
import Link from "next/link"
import { SubscriptionCard } from "@/components/subscription/card"

const SubscribePage = async () => {
  const planType = await checkSubscription()

  const isFree = planType === 1
  const isStandard = planType === 2
  const isPro = planType === 3
  console.log(planType)

  const onStandardSubscribe = async () => {
    try {
      const response = await axios.get("/api/stripe/standard")

      window.location.href = response.data.url
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  const onProSubscribe = async () => {
    try {
      const response = await axios.get("/api/stripe/pro")

      window.location.href = response.data.url
    } catch (error) {
      toast.error("Something went wrong")
    }
  }
  return (
    <>
      <Link href="/login">
        <Button className="absolute left-2 top-2">Home</Button>
      </Link>
      <Card className=" absolute mt-20 flex flex-col items-center justify-center">
        <CardHeader className="flex items-center justify-center text-center">
          <CardTitle>
            Your Current Plan is{" "}
            {isStandard && <Badge className=" text-xl">Standard</Badge>}
            {isPro && <Badge className=" text-xl">Pro</Badge>}
            {isFree && (
              <>
                <Badge className=" text-xl">Free</Badge>
                <br />
                <span className="mt-4">Select your plan.</span>
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!isFree ? (
            <div>
              {isStandard && (
                <SubscriptionCard
                  buttonText="Check for billing page"
                  features={[
                    "旗艦模型: GPT-4、Gemini-Pro-1.5、Claude-3等高級模型",
                    "文件存儲: 50MB存儲容量",
                    "輸出限制: 每月最多400,000字",
                    "與圖像對話",
                    "與文件對話",
                    "自定義助手",
                    "工作區功能",
                    " 加入我們的社區",
                    "持續更新教程",
                    "訪問我們的Prompt Wiki",
                    "800+ AI工具"
                  ]}
                  price={160}
                  title="STANDARD標準計劃"
                  onClick={onStandardSubscribe}
                />
              )}
              {isPro && (
                <SubscriptionCard
                  buttonText="Check for billing page"
                  features={[
                    "包含所有標準功能: 包括標準計劃中的所有內容",
                    "增加輸出量: 更高的每月字數限制（具體限制待定）",
                    "獨家第一手AI內容",
                    "AI+自動化、AI+金融等專門領域內容"
                  ]}
                  price={280}
                  title="PRO專業計劃"
                  onClick={onProSubscribe}
                />
              )}
            </div>
          ) : (
            <div className="grid w-full grid-cols-2">
              <SubscriptionCard
                buttonText="Remain on Free"
                features={[
                  "基礎LLM: Groq和其他開源模型",
                  "使用限制: 限制使用容量",
                  "功能限制: 功能和特性有限"
                ]}
                price={0}
                title="FREE免費計劃"
              />
              <SubscriptionCard
                buttonText="Upgrade to Standard"
                features={[
                  "旗艦模型: GPT-4、Gemini-Pro-1.5、Claude-3等高級模型",
                  "文件存儲: 50MB存儲容量",
                  "輸出限制: 每月最多400,000字",
                  "與圖像對話",
                  "與文件對話",
                  "自定義助手",
                  "工作區功能",
                  " 加入我們的社區",
                  "持續更新教程",
                  "訪問我們的Prompt Wiki",
                  "800+ AI工具"
                ]}
                price={160}
                title="STANDARD標準計劃"
                onClick={onStandardSubscribe}
              />
              <SubscriptionCard
                buttonText="Upgrade to Pro"
                features={[
                  "包含所有標準功能: 包括標準計劃中的所有內容",
                  "增加輸出量: 更高的每月字數限制（具體限制待定）",
                  "獨家第一手AI內容",
                  "AI+自動化、AI+金融等專門領域內容"
                ]}
                price={280}
                title="PRO專業計劃"
                onClick={onProSubscribe}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}

export default SubscribePage
