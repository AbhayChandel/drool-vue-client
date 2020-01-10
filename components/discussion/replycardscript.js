import ReportViolationCard from "@/components/common/ReportViolationCard";

export default {
  components: {
    ReportViolationCard
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    reply: {
      type: String,
      required: true
    },
    userId: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    datePosted: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    showReportViolationCard: false,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  }),
  methods: {
    openReportViolationCard() {
      showReportViolationCard = !showReportViolationCard;
    }
  },
  computed: {}
};
