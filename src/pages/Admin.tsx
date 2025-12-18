import { useState } from "react";
import { Lock, User, Eye, EyeOff, LayoutDashboard, Archive, Image, Users, Settings, LogOut, Plus, Edit, Trash2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { archives } from "@/data/archives";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === "admin" && credentials.password === "museum2024") {
      setIsLoggedIn(true);
      toast.success("Welcome to the Admin Panel!");
    } else {
      toast.error("Invalid credentials. Try admin / museum2024");
    }
  };

  const stats = [
    { label: "Total Archives", value: archives.length, change: "+12%" },
    { label: "Monthly Visitors", value: "24,500", change: "+8%" },
    { label: "Virtual Tours", value: "1,250", change: "+23%" },
    { label: "Feedback", value: "89", change: "+5%" },
  ];

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "archives", label: "Archives", icon: Archive },
    { id: "media", label: "Media", icon: Image },
    { id: "visitors", label: "Visitors", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-16 min-h-screen flex items-center">
          <div className="container-museum">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-display text-4xl tracking-wider mb-2">ADMIN LOGIN</h1>
                <p className="text-muted-foreground">Access the content management system</p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Username"
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Sign In
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Demo Credentials:</strong><br />
                      Username: admin<br />
                      Password: museum2024
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <div className="pt-20 md:pt-24">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden md:flex w-64 fixed left-0 top-20 bottom-0 flex-col bg-card border-r border-border p-4">
            <div className="flex-1 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              className="justify-start text-muted-foreground hover:text-destructive"
              onClick={() => {
                setIsLoggedIn(false);
                toast.info("Logged out successfully");
              }}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </Button>
          </aside>

          {/* Main Content */}
          <main className="flex-1 md:ml-64 p-6">
            {activeTab === "dashboard" && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h1 className="font-display text-3xl tracking-wider">Dashboard</h1>
                  <p className="text-muted-foreground">Welcome back, Administrator</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <Card key={stat.label}>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground text-sm">{stat.label}</p>
                        <div className="flex items-end justify-between mt-2">
                          <p className="font-display text-3xl">{stat.value}</p>
                          <Badge className="bg-accent/10 text-accent">{stat.change}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-xl">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: "New archive added", item: "FIFA U-20 World Cup 2009", time: "2 hours ago" },
                        { action: "Media updated", item: "Black Stars Celebration Photo", time: "5 hours ago" },
                        { action: "Feedback received", item: "From Kofi Mensah", time: "Yesterday" },
                        { action: "Virtual tour started", item: "AFCON Dynasty", time: "Yesterday" },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">{activity.item}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "archives" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-display text-3xl tracking-wider">Archives</h1>
                    <p className="text-muted-foreground">Manage archive content</p>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Archive
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="text-left p-4 font-medium">Title</th>
                            <th className="text-left p-4 font-medium">Type</th>
                            <th className="text-left p-4 font-medium">Year</th>
                            <th className="text-left p-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {archives.slice(0, 6).map((item) => (
                            <tr key={item.id} className="border-b border-border">
                              <td className="p-4">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-10 h-10 rounded object-cover"
                                  />
                                  <span className="font-medium">{item.title}</span>
                                </div>
                              </td>
                              <td className="p-4">
                                <Badge variant="secondary" className="capitalize">
                                  {item.type}
                                </Badge>
                              </td>
                              <td className="p-4 text-muted-foreground">{item.year}</td>
                              <td className="p-4">
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="icon">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="text-destructive">
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {(activeTab === "media" || activeTab === "visitors" || activeTab === "settings") && (
              <div className="flex items-center justify-center min-h-[60vh] animate-fade-in">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    {activeTab === "media" && <Image className="w-8 h-8 text-muted-foreground" />}
                    {activeTab === "visitors" && <Users className="w-8 h-8 text-muted-foreground" />}
                    {activeTab === "settings" && <Settings className="w-8 h-8 text-muted-foreground" />}
                  </div>
                  <h2 className="font-display text-2xl mb-2 capitalize">{activeTab}</h2>
                  <p className="text-muted-foreground">This section is coming soon</p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
