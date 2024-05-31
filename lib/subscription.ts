const DAY_IN_MS = 86_400_000

import { Database } from "@/supabase/types"
import { createBrowserClient } from "@supabase/ssr"

export const checkSubscription: () => Promise<string> = async () => {
  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const user = (await supabase.auth.getUser()).data.user

  if (!user) {
    return "free"
  }

  const { data, error: supabaseError } = await supabase
    .from("user_subscription")
    .select("*")
    .eq("user_id", user.id)
    .single()

  if (supabaseError || !data) {
    return "free"
  }

  const isValid =
    data.stripe_price_id &&
    new Date(data.stripe_current_period_end).getTime() + DAY_IN_MS > Date.now()

  if (!isValid) {
    return "free"
  }

  return data.plan_type
}
