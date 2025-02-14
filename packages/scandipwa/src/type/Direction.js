/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import PropTypes from 'prop-types';

import {
    BOTTOM,
    LEFT,
    RIGHT,
    TOP
} from 'Component/ChevronIcon/ChevronIcon.config';

// eslint-disable-next-line import/prefer-default-export
export const DirectionType = PropTypes.oneOf(RIGHT, LEFT, TOP, BOTTOM);
