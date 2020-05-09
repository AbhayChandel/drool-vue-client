<template>
  <no-ssr>
    <picker
      v-show="showEmojiPicker"
      title="Pick your emoji..."
      emoji="point_up"
      @select="addEmoji"
      class="mb-2"
    />
  </no-ssr>
</template>
<script>
import { mapState, mapMutations } from "vuex";

import { Picker } from "emoji-mart-vue";
export default {
  components: {
    Picker
  },
  computed: {
    ...mapState("common/emojipicker", [
      "showEmojiPicker",
      "inputFieldRef",
      "inputVal"
    ])
  },
  watch: {
    showEmojiPicker: function(showEmojiPicker) {
      if (showEmojiPicker) {
      } else {
      }
    }
  },
  methods: {
    ...mapMutations({
      setInputVal: "common/emojipicker/setInputVal"
    }),
    addEmoji(emoji) {
      const textarea = this.inputFieldRef;
      const cursorPosition = textarea.selectionEnd;
      const start = this.inputVal.substring(0, textarea.selectionStart);
      const end = this.inputVal.substring(textarea.selectionStart);
      const text = start + emoji.native + end;
      this.setInputVal(text);
      /* this.$emit("input", text);
      textarea.focus();
      this.$nextTick(() => {
        textarea.selectionEnd = cursorPosition + emoji.native.length;
      }); */
    }
  }
};
</script>
