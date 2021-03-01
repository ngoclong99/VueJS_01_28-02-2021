<template>
  <div>
      {{content}}
      {{createProps}}
  </div>
</template>

<script>
export default {
    data(){
        return {
            content: 'Long ABC'
        }
    },
    props: [
        'createProps'
    ],
}
</script>

<style>

</style>