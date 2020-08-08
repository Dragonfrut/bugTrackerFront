<form id="bugSubmit">
            <input type="hidden" value="" name="id" id="id" />
            <table id="bug">
                <tr>
                    <td>Title</td>
                    <td><input id="title" type="text" required="true" name="title" /></td>
                </tr>
                <tr>
                    <td>Severity</td>
                    <td>
                        <select id="severity" name="severity" disabled="disabled" name='severity'>
                            <option>Please wait...</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>
                        <select id="status" name="status" disabled="disabled" name='severity'>
                            <option>Please wait...</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Operating System</td>
                    <td>
                        <select id="operatingSystem" name="operatingSystem" disabled="disabled" name='severity'>
                            <option>Please wait...</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td><input id="description" type="text" name="description" /></td>
                </tr>
                <tr>
                    <td>Project</td>
                    <td>
                        <select id="project" name="project" disabled="disabled" name='project'>
                            <option>Please wait...</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Assigned user</td>
                    <td>
                        <select id="assigned" name="assigned" disabled="disabled">
                            <option>Please wait...</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><button type="submit">Submit</button> </td>
                </tr>

                
            </table>
        </form>