import classNames from 'classnames';
import { Container } from '../../layout/Container';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className = '', ...attrs }: FooterProps) => {
  const classes = classNames('Footer', className);

  return (
    <footer className={classes} {...attrs}>
      <Container>
        <div className='flex justify-center'>Footer Component</div>
      </Container>
    </footer>
  );
};
