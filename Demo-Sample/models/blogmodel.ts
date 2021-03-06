import {onetomany, manytoone, manytomany} from 'nodedata/core/decorators';
import {field, document} from 'nodedata/mongoose/decorators';
import {IBlog} from './blog';
import {Strict} from 'nodedata/mongoose/enums';

@document({ name: 'blogs', strict: Strict.true  })
export class BlogModel{
    @field({primary: true, autogenerated: true})
    _id: any;
    
    @field()
    name: any;
    
    //@manytoone({rel: 'users'})
    //users: Array<UserModel>;

    constructor(blogDto: IBlog) {
        this._id = blogDto._id;
        this.name = blogDto.name;
    }
}
