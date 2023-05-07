import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "HoudiniGraphql",
    type: "organization",
  },
  outputDir: "generated",
  tiers: [
    {
      title: "Wizard",
      monthlyDollars: 1500,
      preset: presets.xl,
    },
    {
      title: "Mage",
      monthlyDollars: 500,
      preset: presets.large,
    },
    {
      title: "Magician's Apprentice",
      monthlyDollars: 25,
      preset: presets.medium,
    },
    {
      title: "Supportive Muggle",
      monthlyDollars: 10,
      preset: presets.small,
    },
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: "Early adopters",
      preset: presets.small,
    },
  ],
});
