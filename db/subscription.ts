import { supabase } from "@/lib/supabase/browser-client"

export const getSubscriptionByUserId = async (userId: string) => {
  const { data: subscription, error } = await supabase
    .from("user_subscription")
    .select("*")
    .eq("user_id", userId)
    .single()

  if (!subscription) {
    throw new Error(error.message)
  }

  return subscription
}
