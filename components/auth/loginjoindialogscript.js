import { mapState, mapMutations } from "vuex";

import LoginCard from "@/components/auth/LoginCard";
import JoiningCard from "@/components/auth/JoiningCard";

export default {
  components: {
    LoginCard,
    JoiningCard
  },
  data: () => ({
    loginCardActive: true,
    joiningCardActive: false
  }),
  props: {
    value: Boolean
  },
  computed: {
    ...mapState("user/loginsignupdialog", ["dialogOpen"]),
    showLoginCard() {
      return this.loginCardActive;
    },
    showJoiningCard() {
      return this.joiningCardActive;
    }
  },
  methods: {
    toggleCards() {
      this.loginCardActive = !this.loginCardActive;
      this.joiningCardActive = !this.joiningCardActive;
    },
    ...mapMutations({
      setDialogToClosed: "user/loginsignupdialog/setDialogToClosed"
    })
  }
};
