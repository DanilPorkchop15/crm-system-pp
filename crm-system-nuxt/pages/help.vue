<script lang="ts" setup>
  const FAQ_DATA = [
    {
      Id: '1',
      question: "question-1",
      answer: "answer-1"
    },
    {
      Id: '2',
      question: "question-2",
      answer: "answer-2"
    },
    {
      Id: '3',
      question: "question-3",
      answer: "answer-3"
    },
    {
      Id: '4',
      question: "question-4",
      answer: "answer-4"
    },
    {
      Id: '5',
      question: "question-5",
      answer: "answer-5"
    },
    {
      Id: '6',
      question: "question-6",
      answer: "answer-6"
    }
  ]
</script>

<template>
  <div>
    <h1 class="text-2xl mb-10">
      {{ $t("help-title") }}
    </h1>
    <div class="faq">
      <Accordion type="single" class="w-full" collapsible :default-value="'1'">
        <AccordionItem v-for="item in FAQ_DATA" :key="item.Id" :value="item.Id">
          <AccordionTrigger class="text-md">
            {{ $t("faq." + item.question) }}
          </AccordionTrigger>
          <AccordionContent>
            {{ $t("faq." + item.answer) }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<style>

</style>  