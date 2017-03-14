class Api::TagsController < ApplicationController

  def index
    @user = current_user
    @notes = @user.notes
    @tags = []
    @notes.each do |note|
      note.tags.each do |tag|
        @tags.push(tag)
      end
    end
    @tags = @tags.uniq
    render :index
  end

  def show
    @tag = Tag.find(tag_params[:id])
    @notes = @tag.notes
      render :show
  end


  def create
    new_params = tag_params.reject {|h| h["note_id"]}
    @tag = Tag.new(new_params)
      @note = Note.find_by_id(tag_params[:note_id])
      @tag.notes << @note
      if @tag.save
        render :show
      else
        render @tag.errors.full_messages, status: 422
      end
  end

  def update

    @tag = Tag.find(tag_params[:id])
      if @tag.update!(tag_params)
        render :show
      else
        render @tag.errors.full_messages, status: 422
      end
  end

  def destroy
    @tag = Tag.find(tag_params[:id])
    @tag.destroy!
      render :show
  end

  private
    def tag_params
      params.require(:tag).permit(:id, :name, :note_id)
    end

end
