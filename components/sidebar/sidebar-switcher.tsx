import { ContentType } from "@/types"
import {
  IconAdjustmentsHorizontal,
  IconBolt,
  IconBooks,
  IconFile,
  IconMessage,
  IconPencil,
  IconRobotFace,
  IconSparkles
} from "@tabler/icons-react"
import { FC, memo, useContext, useMemo } from "react"
import { TabsList } from "../ui/tabs"
import { WithTooltip } from "../ui/with-tooltip"
import { ProfileSettings } from "../utility/profile-settings"
import { SidebarSwitchItem } from "./sidebar-switch-item"
import { checkSubscription } from "@/lib/subscription"
import { LockKeyholeIcon } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card"
import Link from "next/link"
import { ChatbotUIContext } from "@/context/context"

export const SIDEBAR_ICON_SIZE = 28

interface SidebarSwitcherProps {
  onContentTypeChange: (contentType: ContentType) => void
  planType: number
}

const SidebarSwitcherComponent: FC<SidebarSwitcherProps> = async ({
  onContentTypeChange,
  planType
}) => {
  const isPro = planType === 2

  return (
    <div className="flex flex-col justify-between border-r-2 pb-5">
      <TabsList className="bg-background grid h-[440px] grid-rows-7">
        <SidebarSwitchItem
          icon={<IconMessage size={SIDEBAR_ICON_SIZE} />}
          contentType="chats"
          onContentTypeChange={onContentTypeChange}
        />

        {isPro && (
          <SidebarSwitchItem
            icon={<IconAdjustmentsHorizontal size={SIDEBAR_ICON_SIZE} />}
            contentType="presets"
            onContentTypeChange={onContentTypeChange}
          />
        )}
        {!isPro && (
          <Link href={"/subscribe"}>
            <HoverCard>
              <HoverCardTrigger>
                <div>
                  <LockKeyholeIcon
                    href="/subscribe"
                    className=" ml-3 cursor-pointer text-white transition hover:text-gray-400"
                    size={28}
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent side="right">
                Click to upgrade and unlock Presets
              </HoverCardContent>
            </HoverCard>
          </Link>
        )}

        {isPro && (
          <SidebarSwitchItem
            icon={<IconPencil size={SIDEBAR_ICON_SIZE} />}
            contentType="prompts"
            onContentTypeChange={onContentTypeChange}
          />
        )}
        {!isPro && (
          <div>
            <Link href={"/subscribe"}>
              <HoverCard>
                <HoverCardTrigger>
                  <LockKeyholeIcon
                    href="/subscribe"
                    className=" ml-3 cursor-pointer text-white transition hover:text-gray-400"
                    size={28}
                  />
                </HoverCardTrigger>
                <HoverCardContent side="right">
                  Click to upgrade and unlock Prompts
                </HoverCardContent>
              </HoverCard>
            </Link>
          </div>
        )}

        {isPro && (
          <SidebarSwitchItem
            icon={<IconSparkles size={SIDEBAR_ICON_SIZE} />}
            contentType="models"
            onContentTypeChange={onContentTypeChange}
          />
        )}
        {!isPro && (
          <div>
            <Link href={"/subscribe"}>
              <HoverCard>
                <HoverCardTrigger>
                  <LockKeyholeIcon
                    href="/subscribe"
                    className=" ml-3 cursor-pointer text-white transition hover:text-gray-400"
                    size={28}
                  />
                </HoverCardTrigger>
                <HoverCardContent side="right">
                  Click to upgrade and unlock custom models
                </HoverCardContent>
              </HoverCard>
            </Link>
          </div>
        )}

        {isPro && (
          <SidebarSwitchItem
            icon={<IconFile size={SIDEBAR_ICON_SIZE} />}
            contentType="files"
            onContentTypeChange={onContentTypeChange}
          />
        )}
        {!isPro && (
          <div>
            <Link href={"/subscribe"}>
              <HoverCard>
                <HoverCardTrigger>
                  <LockKeyholeIcon
                    href="/subscribe"
                    className=" ml-3 cursor-pointer text-white transition hover:text-gray-400"
                    size={28}
                  />
                </HoverCardTrigger>
                <HoverCardContent side="right">
                  Click to upgrade and unlock files
                </HoverCardContent>
              </HoverCard>
            </Link>
          </div>
        )}

        {isPro && (
          <SidebarSwitchItem
            icon={<IconBooks size={SIDEBAR_ICON_SIZE} />}
            contentType="collections"
            onContentTypeChange={onContentTypeChange}
          />
        )}
        {!isPro && (
          <div>
            <Link href={"/subscribe"}>
              <HoverCard>
                <HoverCardTrigger>
                  <LockKeyholeIcon
                    href="/subscribe"
                    className=" ml-3 cursor-pointer text-white transition hover:text-gray-400"
                    size={28}
                  />
                </HoverCardTrigger>
                <HoverCardContent side="right">
                  Click to upgrade and unlock collections
                </HoverCardContent>
              </HoverCard>
            </Link>
          </div>
        )}

        {isPro && (
          <SidebarSwitchItem
            icon={<IconRobotFace size={SIDEBAR_ICON_SIZE} />}
            contentType="assistants"
            onContentTypeChange={onContentTypeChange}
          />
        )}
        {!isPro && (
          <div>
            <Link href={"/subscribe"}>
              <HoverCard>
                <HoverCardTrigger>
                  <LockKeyholeIcon
                    href="/subscribe"
                    className=" ml-3 cursor-pointer text-white transition hover:text-gray-400"
                    size={28}
                  />
                </HoverCardTrigger>
                <HoverCardContent side="right">
                  Click to upgrade and unlock Assistants
                </HoverCardContent>
              </HoverCard>
            </Link>
          </div>
        )}

        {isPro && (
          <SidebarSwitchItem
            icon={<IconBolt size={SIDEBAR_ICON_SIZE} />}
            contentType="tools"
            onContentTypeChange={onContentTypeChange}
          />
        )}
        {!isPro && (
          <div>
            <Link href={"/subscribe"}>
              <HoverCard>
                <HoverCardTrigger>
                  <LockKeyholeIcon
                    className=" ml-3 mt-1 cursor-pointer text-white transition hover:text-gray-400"
                    size={28}
                  />
                </HoverCardTrigger>
                <HoverCardContent side="right">
                  Click to upgrade and unlock tools
                </HoverCardContent>
              </HoverCard>
            </Link>
          </div>
        )}
      </TabsList>

      <div className="flex flex-col items-center space-y-4">
        {/* TODO */}
        {/* <WithTooltip display={<div>Import</div>} trigger={<Import />} /> */}

        {/* TODO */}
        {/* <Alerts /> */}

        <WithTooltip
          display={<div>Profile Settings</div>}
          trigger={<ProfileSettings />}
        />
      </div>
    </div>
  )
}

export const SidebarSwitcher = memo(
  SidebarSwitcherComponent,
  (a, b) => a.planType === b.planType
)
