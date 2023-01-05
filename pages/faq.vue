<template>
  <NuxtLayout>
    <section id="faq" class="min-h-screen py-24 sm:py-36">
      <FadeUp class="container">
        <h1 class="text-left mb-6">FAQ</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div>
            <h4>What is a mortgage broker?</h4>
            <h6>
              A mortgage broker acts as a middleman that connects you to a
              lender. They evaluate your financial situation and capacity to
              borrow before presenting you with a selection of possible home
              loans that best suits your needs.
            </h6>
            <h4>Why use a mortgage broker?</h4>
            <h6>
              A Mortgage Broker can access hundreds of options from over 25
              banks and lenders and negotiate on your behalf to get you the best
              rate possible. Banks can only offer their products.
            </h6>
            <h4>How much does a mortgage broker cost?</h4>
            <h6>Nothing! It's a free service.</h6>
            <h6>
              From initial discussions through to the settlement, a Mortgage
              Broker's services are free!
            </h6>
            <h4>How do Mortgage Brokers get paid?</h4>
            <h6>
              Mortgage Brokers receive a commission from the bank for bringing
              your business to them.
            </h6>
            <h4>Are you available after hours and weekends?</h4>
            <h6>Yes!</h6>
            <h6>
              Being a mobile brokerage, We can connect with you at a time and
              location most convenient to you inside and outside of regular
              business hours.
            </h6>
            <h4>How much can I borrow?</h4>
            <h6>
              Your borrowing capacity will be assessed by the lender,
              considering your current income, employment status, credit history
              and levels of personal debt.
            </h6>
          </div>
          <div>
            <h4>What is an offset account?</h4>
            <h6>
              An offset account is an everyday bank account linked to your home
              loan. You can deposit your salary and savings into the account,
              and the balance is then offset against the amount owing on your
              home loan.
            </h6>
            <h6>
              Say you have a home loan of $500,000 and $50,000 in your offset
              account; in this situation, you'll only be charged interest on a
              loan balance of $450,000 ($500,000 - $50,000).
            </h6>
            <h6>
              Because the offset account acts like an everyday account, your
              $50,000 is still accessible whenever you need it, even while it's
              working to reduce your overall interest payments.
            </h6>
            <h6>
              The advantages of an offset account depend on how much money you
              have sitting in it and the type of offset you have.
            </h6>
            <h4>Should I go with a Fixed or Variable Intrest Rate?</h4>
            <h6>
              Fixed-rate home loans are outstanding for locking in a low rate
              and can be ideal for borrowers trying to stick to a set budget.
              However, fixed-rate home loans aren't always as flexible as
              variable interest rate home loans. And you may find that a
              variable mortgage product will offer a better range of loan
              features (such as a redraw facility or offset account). That's why
              it's always a good idea to carefully assess the pros and cons of
              both options before you decide.
            </h6>
            <h4>What is LMI?</h4>
            <h6>
              LMI is an insurance policy designed to protect the lender if the
              borrower defaults on their mortgage. Most lenders will include LMI
              as a standard requirement when the borrower's deposit is less than
              20% of the property purchase price. LMI costs vary, and it can add
              a high cost to your total purchase price. LMI is payable as a
              once-off premium that gets added to your entire home loan amount.
            </h6>
          </div>
        </div>
        <!-- <ContentDoc path="/faq" v-slot="{ doc }">
          <h1 class="text-left mb-6">{{ doc.header }}</h1>
          <div class="columns-1 md:columns-2 gap-6">
            <ContentRenderer :value="doc" class="text-left" />
          </div>
        </ContentDoc> -->
      </FadeUp>
    </section>
  </NuxtLayout>
</template>
