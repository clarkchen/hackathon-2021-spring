/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2019, hardchain
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of hardchain nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL hardchain BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

import {Page,React, Link} from 'webpkit';
import Nav from '../../ctr/nav';
import './index.scss';

export default class extends Page {
	
	render() {
		return (
			<div className="body sell">
				<Nav />
				<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingTop: '200px'}}>

					<div style={{textAlign: 'center'}}>
						ERC721协约：<input ref="erc721" style={{width: '300px'}} /><br /><br />
						ERC721资产ID：<input ref="erc721_id" style={{width: '300px'}} /><br /><br />
						<button>转移到NFTSwap</button>
					</div>
					
					<div style={{textAlign: 'center'}}>

						<br/><br/>
						<h2>或</h2><br/>

						将ERC721资产转移到 0x08A8b3135256725f25b44569D6Ef44674c16A237 协约<br /><br/>
						<Link to="/mynft">转移完成去出售</Link>
					</div>
					
				</div>
			</div>
		);
	}
}