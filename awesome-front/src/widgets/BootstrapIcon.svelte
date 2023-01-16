<script lang="ts">
    import bootstrapIcon from 'bootstrap-icons/bootstrap-icons.svg'

    // Icon list : https://icons.getbootstrap.com/
    export let icon: string;
    export let color = "currentColor";
    export let size = 24;
</script>

<svg {...$$restProps} width={size} height={size} fill={color}>
    <use xlink:href={bootstrapIcon + '#' + icon}/>
</svg>
