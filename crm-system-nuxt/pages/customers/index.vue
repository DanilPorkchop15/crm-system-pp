<script lang="ts" setup>

useSeoMeta({
  title: "Customers | CRM system",
  description: "Customers page",
});

const { data, isLoading, refetch } = useCustomersQuery();;
</script>

<template>
  <div class="p-10">
    <h1 class="text-2xl mb-10">Customers</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[80px]">Image</TableHead>
            <TableHead class="w-[200px]">Name</TableHead>
            <TableHead class="w-[200px]">Email</TableHead>
            <TableHead class="w-[200px]">From source</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="customer in (data?.documents)" :key="customer.$id">
            <TableCell>
              <NuxtLink :to="`/customers/edit/${customer.$id}`">
                <img
                  :src="customer['avatar-url']"
                  :alt="customer.name"
                  class="w-12 h-12 rounded-full"
                />
              </NuxtLink>
            </TableCell>
            <TableCell class="font-medium" @click="console.log(customer.avatar_url)">
              {{ customer.name }}
            </TableCell>
            <TableCell>
              {{ customer.email }}
            </TableCell>
            <TableCell>
              {{ customer["from-source"] }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>

<style></style>
