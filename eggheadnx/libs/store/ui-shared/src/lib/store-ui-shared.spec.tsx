import { render } from '@testing-library/react';

import StoreUiShared from './store-ui-shared';

describe('StoreUiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreUiShared />);
    expect(baseElement).toBeTruthy();
  });
});
