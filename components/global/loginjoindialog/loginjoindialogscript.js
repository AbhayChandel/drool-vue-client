import { mapState, mapMutations } from "vuex";

import LoginCard from "./LoginCard";
import JoiningCard from "./JoiningCard";

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
    ...mapState("common/loginsignupdialog", ["dialogOpen"]),
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
      setDialogToClosed: "common/loginsignupdialog/setDialogToClosed"
    })
  }
};
