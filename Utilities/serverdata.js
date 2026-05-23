
export default function handler(req, res) {
  // This is the data from your screenshot
  const data = {
    "menu-version": "8.0.8",
    "min-version": "8.0.8",
    "discord-invite": "https://discord.gg/",
    "admins": [
      { "name": "DeadCourt", "user-id": "1F677B8C11A839B6" },
      { "name": "User", "user-id": "" }
    ],
    "super-admins": ["DeadCourt"],
    "owners": ["DeadCourt"]
  };

  res.status(200).json(data);
}
