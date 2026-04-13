import { Input } from "@/components/ui/input";
import { Heart, Home, LogOut, MapPin, Package } from "lucide-react";
import Link from "next/link";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const menuItems = [
    { id: "", icon: Home, label: "Account Information" },
    { id: "orders", icon: Package, label: "Order Details" },
    { id: "address", icon: MapPin, label: "Delivery Address" },
    { id: "wishlist", icon: Heart, label: "Wishlist" },
    { id: "logout", icon: LogOut, label: "Logout" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link href={`/profile/${item.id}`} key={item.id}>
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default ProfileLayout;
