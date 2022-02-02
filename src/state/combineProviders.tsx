import { ComponentProps, FC } from 'react';

export const combineProviders = (...components: FC[]): FC => {
  return components.reduce(
    (Accumulated, Current) => {
      return ({ children }: ComponentProps<FC>): JSX.Element => {
        return (
          <Accumulated>
            <Current>{children}</Current>
          </Accumulated>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};
