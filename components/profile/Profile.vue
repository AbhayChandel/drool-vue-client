<template>
  <v-container fill-height fluid style="max-width: 800px;" class="pa-0">
    <v-row style="height: 100%;" justify="center" class="pa-0 ma-0 px-4">
      <v-col id="main-content-col" cols="12" sm="8" class="pa-0">
        <div class="mt-4">Profile</div>
        <v-divider class="mb-4 mt-1"></v-divider>
        <ProfileSection />
        <div class="mt-4">Contributions</div>
        <v-divider class="mb-4 mt-1"></v-divider>
        <ContributionSection
          :contributionsData="profilePageData.contributions"
        />
      </v-col>
      <v-col id="sidebar-col" cols="4" class="hidden-xs-only pa-0 pl-2">
        <SimilarDiscussionCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LeftMenu from "@/components/profile/LeftMenu";
import TopMenu from "@/components/profile/TopMenu";
import ProfileSection from "@/components/profile/ProfileSection";
import ContributionSection from "@/components/profile/ContributionSection";
export default {
  components: {
    LeftMenu,
    TopMenu,
    ProfileSection,
    ContributionSection,
  },
  props: {
    profilePageData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
