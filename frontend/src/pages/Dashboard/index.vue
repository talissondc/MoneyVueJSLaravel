<template>
  <Modal v-if="modal" @closeModalEvent="closeModal">
   <NewTransaction @closeModalEvent="closeModal" />
  </Modal>
  <Header @showModalEvent="showModal"/>
  <main>
    <TransactionSummary />
    <TransactionsTable />
  </main>  
</template>

<script>
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
  }),
  methods: {
    showModal () {
      this.modal = true;
    },
    closeModal () {
      this.modal = false;
    }
  }
}

</script>