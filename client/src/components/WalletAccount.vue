<template>
  <div>
    <p class="address">{{activeAccount}}</p>
    <p class="balance">Balance: {{convertWeiToEth()}}<span> eth</span></p>
    <drizzle-contract id="tokenValue" v-if="isDrizzleInitialized" contractName="CollectReward" method="storedData" label="Reward tokens"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
name: "WalletAccount",
  computed: {
    ...mapGetters('drizzle',['drizzleInstance', "isDrizzleInitialized"]),
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
  },
  methods:{
    convertWeiToEth(){
      return (this.activeBalance / 1000000000000000000).toFixed(7);
    }
  }
}
</script>

<style scoped>
#tokenValue{
  color:#e6d500;
  font-weight: bold;
}
.balance{
  color:#e6d500;
  font-weight: bold;
  word-break: break-word;
}

.address{
  color: #d7d9ff;
  font-weight: bold;
  word-break: break-word;
}
.balance span{
  font-size: 13px;
}
</style>