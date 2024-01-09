import { SidebarMenuItem } from "@/types";
import HomeIcon from "@/assets/icons/Home.png";
import OrdersIcon from "@/assets/icons/Orders.png";
import ProductsIcon from "@/assets/icons/Products.png";
import DeliveryIcon from "@/assets/icons/Delivery.png";
import MarketingIcon from "@/assets/icons/Marketing.png";
import AnalyticsIcon from "@/assets/icons/Analytics.png";
import PaymentsIcon from "@/assets/icons/Payments.png";
import ToolsIcon from "@/assets/icons/Tools.png";
import DiscountsIcon from "@/assets/icons/Discounts.png";
import AudienceIcon from "@/assets/icons/Audience.png";
import AppearanceIcon from "@/assets/icons/Appearance.png";
import PluginsIcon from "@/assets/icons/Plugins.png";

export const sidebarMenuOptions: SidebarMenuItem[] = [
    {
        id: "home",
        label: "Home",
        navigateTo: "/",
        icon: HomeIcon
    },
    {
        id: "orders",
        label: "Orders",
        navigateTo: "/orders",
        icon: OrdersIcon
    },
    {
        id: "products",
        label: "Products",
        navigateTo: "/products",
        icon: ProductsIcon
    },
    {
        id: "delivery",
        label: "Delivery",
        navigateTo: "/delivery",
        icon: DeliveryIcon
    },
    {
        id: "marketing",
        label: "Marketing",
        navigateTo: "/marketing",
        icon: MarketingIcon
    },
    {
        id: "analytics",
        label: "Analytics",
        navigateTo: "/analytics",
        icon: AnalyticsIcon
    },
    {
        id: "payments",
        label: "Payments",
        navigateTo: "/payments",
        icon: PaymentsIcon
    },
    {
        id: "tools",
        label: "Tools",
        navigateTo: "/tools",
        icon: ToolsIcon
    },
    {
        id: "discounts",
        label: "Discounts",
        navigateTo: "/discounts",
        icon: DiscountsIcon
    },
    {
        id: "audience",
        label: "Audience",
        navigateTo: "/audience",
        icon: AudienceIcon
    },
    {
        id: "appearance",
        label: "Appearance",
        navigateTo: "/appearance",
        icon: AppearanceIcon
    },
    {
        id: "plugins",
        label: "Plugins",
        navigateTo: "/plugins",
        icon: PluginsIcon
    }
]