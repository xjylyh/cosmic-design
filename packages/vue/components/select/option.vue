<script setup lang="ts">
import { ref } from 'vue';
import { selectOption as _styles} from 'cosmic-ui';

const props = defineProps({
    size: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    selected: {
        type: Boolean,
        default: false,
    },
});

const styles = _styles;

const emits = defineEmits(['onChange']);

const state = ref(props.disabled? 'disabled': 'normal');

const changeHandler = () => {
    emits('onChange', {label: props.label, value: props.value});
};

</script>

<template>
    <li 
        :class="[styles['select-option'], state, size, selected ? 'active' : '']"
        class="flex"
        @mousedown="changeHandler"
    >
        <span :class="[styles.option]">
            <slot>
                {{ label }}
                <i-cosmic-check 
                    v-if="selected"
                />
            </slot>
        </span>
    </li>
</template>