<template>
  <div>
    <HeroPP />
    <PortfolioPP />
  </div>
</template>

<script>
import HeroPP from '@/components/HeroPP.vue';
import PortfolioPP from '@/components/PortfolioPP.vue';

export default {
  name: 'PortfolioPage',
  components: {
    HeroPP,
    PortfolioPP,
  },
}
</script>
