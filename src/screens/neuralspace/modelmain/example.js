import React from 'react';

export default () => (
    <table style={{color: 'white'}} className="table-striped">
                            <tbody><tr>
                                <th>Task</th>
                                <th>Dataset</th>
                                <th>Model</th>
                                <th>Metric Name</th>
                                <th>Metric Value</th>
                                <th>Global Rank</th>
                                
                                
                                    <th>Result</th>
                                
                                <th>Benchmark</th>
                            </tr>

                            
                                <tr>
                                    
                                    <td rowspan="4" className="rowspan-td">
                                        Lesion Segmentation
                                    </td>
                                    
                                    
                                    <td rowspan="4" className="rowspan-td">
                                        Anatomical Tracings of Lesions After Stroke (ATLAS)
                                    </td>
                                    
                                    
                                    <td rowspan="4" className="rowspan-td model-col">
                                        
                                            U-Net
                                        
                                    </td>
                                    
                                    <td>
                                        Dice
                                    </td>
                                    <td>
                                        0.4606
                                    </td>
                                    <td>
                                        # 2
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=38102">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/lesion-segmentation-on-anatomical-tracings-of-1">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    
                                    
                                    <td>
                                        IoU
                                    </td>
                                    <td>
                                        0.3447
                                    </td>
                                    <td>
                                        # 2
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=38102">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/lesion-segmentation-on-anatomical-tracings-of-1">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    
                                    
                                    <td>
                                        Precision
                                    </td>
                                    <td>
                                        0.5994
                                    </td>
                                    <td>
                                        # 1
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=38102">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/lesion-segmentation-on-anatomical-tracings-of-1">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    
                                    
                                    <td>
                                        Recall
                                    </td>
                                    <td>
                                        0.4449
                                    </td>
                                    <td>
                                        # 1
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=38102">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/lesion-segmentation-on-anatomical-tracings-of-1">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    <td rowspan="2" className="rowspan-td">
                                        Retinal Vessel Segmentation
                                    </td>
                                    
                                    
                                    <td rowspan="2" className="rowspan-td">
                                        CHASE_DB1
                                    </td>
                                    
                                    
                                    <td rowspan="2" className="rowspan-td model-col">
                                        
                                            U-Net
                                        
                                    </td>
                                    
                                    <td>
                                        F1 score
                                    </td>
                                    <td>
                                        0.7783
                                    </td>
                                    <td>
                                        # 10
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=3244">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/retinal-vessel-segmentation-on-chase_db1">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    
                                    
                                    <td>
                                        AUC
                                    </td>
                                    <td>
                                        0.9772
                                    </td>
                                    <td>
                                        # 10
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=3244">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/retinal-vessel-segmentation-on-chase_db1">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    <td rowspan="3" className="rowspan-td">
                                        Colorectal Gland Segmentation:
                                    </td>
                                    
                                    
                                    <td rowspan="3" className="rowspan-td">
                                        CRAG
                                    </td>
                                    
                                    
                                    <td rowspan="3" className="rowspan-td model-col">
                                        
                                            U-Net (e)
                                        
                                    </td>
                                    
                                    <td>
                                        F1-score
                                    </td>
                                    <td>
                                        0.827
                                    </td>
                                    <td>
                                        # 8
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=16702">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/colorectal-gland-segmentation-on-crag">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    
                                    
                                    <td>
                                        Dice
                                    </td>
                                    <td>
                                        0.844
                                    </td>
                                    <td>
                                        # 9
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=16702">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/colorectal-gland-segmentation-on-crag">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    
                                    
                                    <td>
                                        Hausdorff Distance (mm)
                                    </td>
                                    <td>
                                        196.9
                                    </td>
                                    <td>
                                        # 5
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=16702">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/colorectal-gland-segmentation-on-crag">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    <td rowspan="1" className="rowspan-td">
                                        Colorectal Gland Segmentation:
                                    </td>
                                    
                                    
                                    <td rowspan="1" className="rowspan-td">
                                        CRAG
                                    </td>
                                    
                                    
                                    <td rowspan="1" className="rowspan-td model-col">
                                        
                                            U-Net
                                        
                                    </td>
                                    
                                    <td>
                                        DiceOC
                                    </td>
                                    <td>
                                        0.835
                                    </td>
                                    <td>
                                        # 1
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=40302">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/colorectal-gland-segmentation-on-crag">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    <td rowspan="2" className="rowspan-td">
                                        Colorectal Gland Segmentation:
                                    </td>
                                    
                                    
                                    <td rowspan="2" className="rowspan-td">
                                        CRAG
                                    </td>
                                    
                                    
                                    <td rowspan="2" className="rowspan-td model-col">
                                        
                                            FCN8 (e)
                                        
                                    </td>
                                    
                                    <td>
                                        F1-score
                                    </td>
                                    <td>
                                        0.796
                                    </td>
                                    <td>
                                        # 11
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=16701">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/colorectal-gland-segmentation-on-crag">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    
                                    
                                    <td>
                                        Hausdorff Distance (mm)
                                    </td>
                                    <td>
                                        199.5
                                    </td>
                                    <td>
                                        # 4
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=16701">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/colorectal-gland-segmentation-on-crag">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    <td rowspan="3" className="rowspan-td">
                                        Pancreas Segmentation
                                    </td>
                                    
                                    
                                    <td rowspan="3" className="rowspan-td">
                                        CT-150
                                    </td>
                                    
                                    
                                    <td rowspan="3" className="rowspan-td model-col">
                                        
                                            U-Net
                                        
                                    </td>
                                    
                                    <td>
                                        Dice Score
                                    </td>
                                    <td>
                                        0.814
                                    </td>
                                    <td>
                                        # 1
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=3236">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/pancreas-segmentation-on-ct-150">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    
                                    
                                    <td>
                                        Precision
                                    </td>
                                    <td>
                                        0.848
                                    </td>
                                    <td>
                                        # 2
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=3236">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/pancreas-segmentation-on-ct-150">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    
                                    
                                    <td>
                                        Recall
                                    </td>
                                    <td>
                                        0.806
                                    </td>
                                    <td>
                                        # 2
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=3236">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/pancreas-segmentation-on-ct-150">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    <td rowspan="1" className="rowspan-td">
                                        Medical Image Segmentation
                                    </td>
                                    
                                    
                                    <td rowspan="1" className="rowspan-td">
                                        CVC-ClinicDB
                                    </td>
                                    
                                    
                                    <td rowspan="1" className="rowspan-td model-col">
                                        
                                            U-Net
                                        
                                    </td>
                                    
                                    <td>
                                        mean Dice
                                    </td>
                                    <td>
                                        0.8230
                                    </td>
                                    <td>
                                        # 16
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=19751">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/medical-image-segmentation-on-cvc-clinicdb">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    <td rowspan="1" className="rowspan-td">
                                        Cell Segmentation
                                    </td>
                                    
                                    
                                    <td rowspan="1" className="rowspan-td">
                                        DIC-HeLa
                                    </td>
                                    
                                    
                                    <td rowspan="1" className="rowspan-td model-col">
                                        
                                            U-Net
                                        
                                    </td>
                                    
                                    <td>
                                        Mean IoU
                                    </td>
                                    <td>
                                        0.7756
                                    </td>
                                    <td>
                                        # 1
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=3234">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/cell-segmentation-on-dic-hela">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    <td rowspan="1" className="rowspan-td">
                                        Medical Image Segmentation
                                    </td>
                                    
                                    
                                    <td rowspan="1" className="rowspan-td">
                                        ISBI 2012 EM Segmentation
                                    </td>
                                    
                                    
                                    <td rowspan="1" className="rowspan-td model-col">
                                        
                                            U-Net
                                        
                                    </td>
                                    
                                    <td>
                                        Warping Error
                                    </td>
                                    <td>
                                        0.000353
                                    </td>
                                    <td>
                                        # 1
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=3232">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/medical-image-segmentation-on-isbi-2012-em">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            
                                <tr>
                                    
                                    <td rowspan="2" className="rowspan-td">
                                        Skin Cancer Segmentation
                                    </td>
                                    
                                    
                                    <td rowspan="2" className="rowspan-td">
                                        Kaggle Skin Lesion Segmentation
                                    </td>
                                    
                                    
                                    <td rowspan="2" className="rowspan-td model-col">
                                        
                                            U-Net
                                        
                                    </td>
                                    
                                    <td>
                                        F1 score
                                    </td>
                                    <td>
                                        0.8682
                                    </td>
                                    <td>
                                        # 3
                                    </td>
                                    
                                    
                                        <td className="results-icon">
                                            <a href="/paper/u-net-convolutional-networks-for-biomedical/review/?hl=3250">
                                                <span className=" icon-wrapper icon-ion" data-name="enter-outline"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 336l80-80-80-80M48 256h288"></path></svg></span>
                                            </a>
                                        </td>
                                    
                                    <td>
                                        <div className="sota-table-link">
                                            <a className="btn btn-primary" href="/sota/skin-cancer-segmentation-on-kaggle-skin">
                                                Compare</a>
                                        </div>
                                    </td>
                                </tr>
                            

                        </tbody></table>
)