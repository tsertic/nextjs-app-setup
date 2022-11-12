import { IBaseCard } from './BaseCard';

const base: IBaseCard = {
  tag: 'story',
  title: `10 things to do in Croatia`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  author: 'Teresa',
  time: '2h ago',
};
const _alt: IBaseCard = {
  tag: 'science',
  title: `Warp engine construction`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  author: 'Dexter',
  time: '2h ago',
};

export const mockBaseCardProps = {
  base,
};
