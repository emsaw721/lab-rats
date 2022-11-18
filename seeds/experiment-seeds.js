const { Experiment } = require("../models");

const experimentdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officia, reprehenderit quidem reiciendis exercitationem perspiciatis odio vitae temporibus rerum dignissimos fugiat ex quae? Voluptatibus veniam, iure aliquam veritatis numquam blanditiis?",
    user_id: 10,
    project_id: 1,
    //attachment: ????
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam tempore blanditiis debitis voluptatibus perferendis maiores pariatur a quis fuga! Architecto recusandae reiciendis nostrum? In quia assumenda dolorum quam dolores?",
    user_id: 8,
    project_id: 2,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto omnis repudiandae ut repellendus aperiam quod ullam maiores voluptate dolorem! Tempora, aliquam. Eos eius aliquam nisi ut cumque maiores libero corrupti?",
    user_id: 1,
    project_id: 3,
  },
  {
    title: "Nunc purus.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga repellendus atque perspiciatis totam et, nulla odit aliquid asperiores architecto maiores. Quae debitis omnis voluptatum laborum minima quaerat, possimus accusamus.",
    user_id: 4,
    project_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit incidunt quia consequatur? Similique sequi enim numquam distinctio laboriosam reprehenderit minima molestias, eos recusandae debitis, maxime non sint impedit saepe.",
    user_id: 7,
    project_id: 1,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem molestiae, accusantium veniam exercitationem rerum sequi deleniti laboriosam iure iusto officiis sapiente necessitatibus provident optio earum consequuntur ab enim at.",
    user_id: 4,
    project_id: 2,
  },
  {
    title: "In hac habitasse platea dictumst.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, placeat at non nam commodi nobis enim soluta ad blanditiis quam aliquam reiciendis voluptatem dolores quisquam a debitis dolore velit natus.",
    user_id: 1,
    project_id: 3,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam corrupti, reprehenderit eos unde quisquam odio minima quis ut tempora pariatur enim. Quo, pariatur repellat doloremque similique enim eveniet? Explicabo.",
    user_id: 1,
    project_id: 4,
  },
  {
    title: "Duis ac nibh.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae aperiam illo nobis sint, itaque eaque a laudantium illum, delectus rem eligendi accusantium libero, maxime inventore maiores voluptates. Molestiae, autem.",
    user_id: 9,
    project_id: 1,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fuga necessitatibus temporibus? Consequatur non itaque omnis similique autem sit laudantium quisquam, sapiente fugiat eum quas impedit magni culpa ab magnam.",
    user_id: 5,
    project_id: 2,
  },
  {
    title: "In hac habitasse platea dictumst.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla recusandae culpa suscipit harum explicabo eveniet illo soluta tenetur voluptatum atque odit consequuntur architecto error tempore, repudiandae neque sed nesciunt.",
    user_id: 3,
    project_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur consectetur perferendis dicta dolor quae fugit hic voluptas dolores, ad magnam illo deserunt aliquid temporibus, cum molestiae molestias! Voluptates, labore.",
    user_id: 10,
    project_id: 4,
  },
  {
    title: "Donec dapibus.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum eius quidem ad! Corporis est ipsa officia. Velit nostrum doloremque amet ut reiciendis iure assumenda eos possimus non dolor! Adipisci?",
    user_id: 8,
    project_id: 1,
  },
  {
    title: "Nulla tellus.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora libero, ut, temporibus quos delectus a dicta totam consequuntur obcaecati nulla laudantium! Dolorem debitis veritatis ab nemo accusantium totam ea. Assumenda?",
    user_id: 3,
    project_id: 2,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis dicta inventore impedit officia nihil nemo quidem hic numquam voluptatibus vero cupiditate, maxime, atque perspiciatis velit iste beatae tempore magni!",
    user_id: 3,
    project_id: 3,
  },
  {
    title: "Vestibulum ante ipsum primis in faucibus.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate sed totam sit reprehenderit odit sequi accusantium expedita nihil illum at aliquam natus, consectetur voluptates, ipsam ipsum quos. Nesciunt, alias?",
    user_id: 7,
    project_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit rerum dolorum velit soluta quidem error numquam optio cum harum! Consequatur voluptatem voluptas aspernatur. Eveniet ducimus doloremque magni molestiae amet quaerat.",
    user_id: 6,
    project_id: 1,
  },
  {
    title: "Etiam justo.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et odio ex soluta eius obcaecati excepturi? Nihil ducimus modi voluptate quam aperiam ullam exercitationem dignissimos, maiores quae, tenetur rem quia.",
    user_id: 4,
    project_id: 2,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, eum laudantium quisquam animi perferendis facere vitae distinctio quis quos. Itaque nisi iste enim saepe ratione quam rerum unde, dolorem quaerat.",
    user_id: 6,
    project_id: 3,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis voluptate at eveniet ipsa provident, explicabo molestiae consectetur consequatur illo cupiditate quasi quaerat aliquid itaque, deleniti, in molestias facere officia commodi!",
    user_id: 7,
    project_id: 4,
  },
];

const seedExperiments = () =>
  Experiment.bulkCreate(experimentdata, { individualHooks: true });

module.exports = seedExperiments;
