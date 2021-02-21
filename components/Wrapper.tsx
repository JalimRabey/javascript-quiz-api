interface IWrapperProps {
  className?: string;
}

const Wrapper: React.FC<IWrapperProps> = ({ className, children }) => (
  <div className={`wrapper ${className ? className : ''}`}>{children}</div>
);

export default Wrapper;
