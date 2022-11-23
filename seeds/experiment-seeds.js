const { Experiment } = require("../models");

const experimentdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officia, reprehenderit quidem reiciendis exercitationem perspiciatis odio vitae temporibus rerum dignissimos fugiat ex quae? Voluptatibus veniam, iure aliquam veritatis numquam blanditiis?",
    user_id: 10,
    project_id: 1,
    observations:'amet consectetur adipisicing elit'
    
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    purpose_and_hypothesis:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam tempore blanditiis debitis voluptatibus perferendis maiores pariatur a quis fuga! Architecto recusandae reiciendis nostrum? In quia assumenda dolorum quam dolores?",
    user_id: 8,
    project_id: 2,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto omnis repudiandae ut repellendus aperiam quod ullam maiores voluptate dolorem! Tempora, aliquam. Eos eius aliquam nisi ut cumque maiores libero corrupti?",
    user_id: 1,
    project_id: 3,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Nunc purus.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga repellendus atque perspiciatis totam et, nulla odit aliquid asperiores architecto maiores. Quae debitis omnis voluptatum laborum minima quaerat, possimus accusamus.",
    user_id: 4,
    project_id: 4,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Pellentesque eget nunc.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit incidunt quia consequatur? Similique sequi enim numquam distinctio laboriosam reprehenderit minima molestias, eos recusandae debitis, maxime non sint impedit saepe.",
    user_id: 7,
    project_id: 1,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem molestiae, accusantium veniam exercitationem rerum sequi deleniti laboriosam iure iusto officiis sapiente necessitatibus provident optio earum consequuntur ab enim at.",
    user_id: 4,
    project_id: 2,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "In hac habitasse platea dictumst.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, placeat at non nam commodi nobis enim soluta ad blanditiis quam aliquam reiciendis voluptatem dolores quisquam a debitis dolore velit natus.",
    user_id: 1,
    project_id: 3,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam corrupti, reprehenderit eos unde quisquam odio minima quis ut tempora pariatur enim. Quo, pariatur repellat doloremque similique enim eveniet? Explicabo.",
    user_id: 1,
    project_id: 4,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Duis ac nibh.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae aperiam illo nobis sint, itaque eaque a laudantium illum, delectus rem eligendi accusantium libero, maxime inventore maiores voluptates. Molestiae, autem.",
    user_id: 9,
    project_id: 1,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fuga necessitatibus temporibus? Consequatur non itaque omnis similique autem sit laudantium quisquam, sapiente fugiat eum quas impedit magni culpa ab magnam.",
    user_id: 5,
    project_id: 2,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "In hac habitasse platea dictumst.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla recusandae culpa suscipit harum explicabo eveniet illo soluta tenetur voluptatum atque odit consequuntur architecto error tempore, repudiandae neque sed nesciunt.",
    user_id: 3,
    project_id: 3,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur consectetur perferendis dicta dolor quae fugit hic voluptas dolores, ad magnam illo deserunt aliquid temporibus, cum molestiae molestias! Voluptates, labore.",
    user_id: 10,
    project_id: 4,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Donec dapibus.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum eius quidem ad! Corporis est ipsa officia. Velit nostrum doloremque amet ut reiciendis iure assumenda eos possimus non dolor! Adipisci?",
    user_id: 8,
    project_id: 1,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Nulla tellus.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora libero, ut, temporibus quos delectus a dicta totam consequuntur obcaecati nulla laudantium! Dolorem debitis veritatis ab nemo accusantium totam ea. Assumenda?",
    user_id: 3,
    project_id: 2,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    purpose_and_hypothesis:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis dicta inventore impedit officia nihil nemo quidem hic numquam voluptatibus vero cupiditate, maxime, atque perspiciatis velit iste beatae tempore magni!",
    user_id: 3,
    project_id: 3,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Vestibulum ante ipsum primis in faucibus.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate sed totam sit reprehenderit odit sequi accusantium expedita nihil illum at aliquam natus, consectetur voluptates, ipsam ipsum quos. Nesciunt, alias?",
    user_id: 7,
    project_id: 4,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "In hac habitasse platea dictumst.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit rerum dolorum velit soluta quidem error numquam optio cum harum! Consequatur voluptatem voluptas aspernatur. Eveniet ducimus doloremque magni molestiae amet quaerat.",
    user_id: 6,
    project_id: 1,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Etiam justo.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et odio ex soluta eius obcaecati excepturi? Nihil ducimus modi voluptate quam aperiam ullam exercitationem dignissimos, maiores quae, tenetur rem quia.",
    user_id: 4,
    project_id: 2,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, eum laudantium quisquam animi perferendis facere vitae distinctio quis quos. Itaque nisi iste enim saepe ratione quam rerum unde, dolorem quaerat.",
    user_id: 6,
    project_id: 3,
    observations:'amet consectetur adipisicing elit'
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    purpose_and_hypothesis:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis voluptate at eveniet ipsa provident, explicabo molestiae consectetur consequatur illo cupiditate quasi quaerat aliquid itaque, deleniti, in molestias facere officia commodi!",
    user_id: 7,
    project_id: 4,
    observations:'amet consectetur adipisicing elit'
  },
];

const seedExperiments = () =>
  Experiment.bulkCreate(experimentdata, { individualHooks: true });

module.exports = seedExperiments;
