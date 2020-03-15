<template>
  <v-container class="pa-0">
    <!--     <CurrentlyOwnedAspect class="my-2" />
    <ShadesAspect class="my-2" />
    <FashionStyleAspect class="my-2" />
    <SettingAspect class="my-2" />
    <OccassionAspect class="my-2" /> -->
    <v-row class="d-flex flex-row flex-wrap justify-start align-stretch">
      <v-col
        v-for="aspect in aspects"
        :key="aspect.name"
        class="ma-0 pa-0 ma-2"
        style=" min-width:230px; max-height:330px"
      >
        <BoldChipsDisplay
          v-if="aspect.displayComp === 'bc'"
          :aspectData="aspect"
        />
        <LightChipsDisplay
          v-if="aspect.displayComp === 'lc'"
          :aspectData="aspect"
          class=""
        />
        <CircularProgressDisplay
          v-else-if="aspect.displayComp === 'pc'"
          :aspectData="aspect"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BoldChipsDisplay from "@/components/product/aspect/BoldChipsDisplay";
import LightChipsDisplay from "@/components/product/aspect/LightChipsDisplay";
import CircularProgressDisplay from "@/components/product/aspect/CircularProgressDisplay";

export default {
  components: {
    BoldChipsDisplay,
    LightChipsDisplay,
    CircularProgressDisplay
  },
  data: () => ({
    aspects: [
      {
        name: "ownership",
        displayComp: "bc",
        title: "I currently?",
        totalFeeds: 50,
        options: [
          {
            name: "Have it",
            votes: 20
          },
          {
            name: "Want it",
            votes: 15
          },
          {
            name: "Had it",
            votes: 15
          }
        ]
      },
      {
        name: "shades",
        displayComp: "lc",
        title: "Top shades",
        totalFeeds: 250,
        options: [
          {
            name: "Red Coat",
            votes: 23
          },
          {
            name: "Rosy Sunday",
            votes: 16
          },
          {
            name: "Cherry Chic",
            votes: 15
          },
          {
            name: "Rosetta Motive",
            votes: 15
          },
          {
            name: "Cabernet Category",
            votes: 10
          },
          {
            name: "Maple Map",
            votes: 7
          },
          {
            name: "Coffee Command",
            votes: 5
          },
          {
            name: "Orange Edge",
            votes: 1
          },
          {
            name: "Pink Perfect",
            votes: 0
          },
          {
            name: "Ruby Rush",
            votes: 0
          }
        ]
      },
      {
        name: "fashionStyles",
        displayComp: "pc",
        title: "Top voted styles",
        totalFeeds: 1200,
        options: [
          {
            name: "Retro",
            votes: 22.5
          },
          {
            name: "Bohemian",
            votes: 16.1
          },
          {
            name: "Chic",
            votes: 13.5
          },
          {
            name: "Sexy",
            votes: 8.3
          },
          {
            name: "Casual",
            votes: 7.3
          },
          {
            name: "Preppy",
            votes: 6.3
          }
        ]
      },
      {
        name: "occassion",
        displayComp: "pc",
        title: "Occassion",
        totalFeeds: 300,
        options: [
          {
            name: "Wedding",
            votes: 62.5
          },

          {
            name: "Clubbing",
            votes: 29.1
          },
          {
            name: "Brunch",
            votes: 20.5
          },
          {
            name: "Party",
            votes: 8.3
          },
          {
            name: "Movies",
            votes: 5.6
          }
        ]
      },
      {
        name: "environment",
        displayComp: "pc",
        title: "Environment best for",
        totalFeeds: 300,
        options: [
          {
            name: "office",
            votes: 62.5
          },

          {
            name: "Day Out",
            votes: 29.1
          },
          {
            name: "shopping",
            votes: 20.5
          },
          {
            name: "office",
            votes: 8.3
          }
        ]
      }
    ]
  })
};
</script>
