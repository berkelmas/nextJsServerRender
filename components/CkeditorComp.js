import React, {Fragment, Component} from 'react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';

class CkeditorComp extends Component {
  render(){
    return (
      <div>
        <CKEditor
            editor={ ClassicEditor }
            {...this.props}
        />
      </div>
    )
  }
}

export default CkeditorComp;
