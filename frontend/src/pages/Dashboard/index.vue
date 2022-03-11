<template>
  <Modal v-if="modal" @closeModalEvent="closeModal">
   <NewTransaction @closeModalEvent="closeModal" @updateTransactions="updateTransactions" />
  </Modal>
  <Header @showModalEvent="showModal"/>
  <main>
    <TransactionSummary :transactions="transactionsData"/>
    <TransactionsTable :transactions="transactionsData" @updateTransactions="updateTransactions"/>
  </main>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from './Components/Header';
import TransactionSummary from './Components/TransactionsSummary';
import TransactionsTable from './Components/TransactionsTable';
import Modal from '@/components/modal';
import NewTransaction from './Components/NewTransaction';

export default {
  components: {
    Header,
    TransactionSummary,
    TransactionsTable,
    Modal,
    NewTransaction
  },
  data: () => ({
    modal: false,
    transactionsData: [],
  }),
  computed: {
     ...mapGetters('dashboard', ['getTransactions']),
  },
  async created() {
    await this.actionGetAllTransactions();

    this.transactionsData = this.getTransactions
  },
  methods: {
    ...mapActions('dashboard', ['actionGetAllTransactions']),

    showModal () {
      this.modal = true;
    },

    closeModal () {
      this.modal = false;
    },

   async updateTransactions() {
      await this.actionGetAllTransactions();

      this.transactionsData = this.getTransactions
    }
  }
}

</script>